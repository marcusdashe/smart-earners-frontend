import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import Loader_ from "../loader/Loader";
import { getUsers } from "../../../redux/auth/auth";
import styled from 'styled-components'
import BlockIcon from '@mui/icons-material/Block';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import moment from 'moment'
import Spinner from "../../../loaders/Spinner";
import filter from "@mozeyinedu/filter";
import SearchIcon from '@mui/icons-material/Search';
import { blockUser, deleteUser, unBlockUser} from "../../../../smartEanersBackend/auth/controls/auth";





import {
  AdminWrapper,
} from "../styles";
import { ScrollBar } from "../../../styles/globalStyle";

export default function Users({userInfo}) {
  const dispatch = useDispatch()
  const state = useSelector(state=>state);
  const [isLoading, setLoading] = useState(true)
  const {users} = state.auth;
  const [investor, setInvestor] = useState(0);
  const [balance, setBalance] = useState(0)
  const [admin, setAdmin] = useState(0);
  const [inp, setInp] = useState('');
  const [filteredData, setFilter] = useState([]);
  // console.log(users)
 
  useEffect(()=>{
    let sum = 0;
    for(let i=0; i<users.data.length; i++){
      if(users.data[i].hasInvested){
        sum =+ 1
      }
    }
    setInvestor(sum)

    let bal = 0;
    for(let i=0; i<users.data.length; i++){
      bal =+ users.data[i].amount
    }
    setBalance(bal)

    
    let ad = 0;
    for(let i=0; i<users.data.length; i++){
      if(users.data[i].isAdmin){
        ad =+ 1
      }
    }
    setAdmin(ad)
    
  }, [])

  useEffect(()=>{
    const newData = filter({
      data: users.data,
      keys: [ "username", "email", "amount", "accountNumber", 'true'],
      input: inp
    })

    setFilter(newData)

  }, [inp])

  
  useEffect(()=>{
    setLoading(true)
    dispatch(getUsers())

    setTimeout(()=>{
      users.isLoading ? setLoading(true) : setLoading(false)
    }, 1000)
  }, [])


  const deleteUser=(id)=>{
    // dispatch(deleteUser(id))
  }
  const handleBlock=(id, isBlock)=>{
    // isBlock ?  dispatch(unBlockUser(id)) :  dispatch(blockUser(id))
  }

  return (
    <>
      <Header>
        <div className="row">
         <div className="search">
            <input
              type="text"
              placeholder="Search by username, email, amount"
              value={inp || ''}
              onChange={(e)=>setInp(e.target.value)}
            />
            <div className="icon"><SearchIcon /></div>
         </div>
        </div>
        <div className="row">
          <div>Total members: {users.isLoading ? <Spinner size='.7rem' /> : users.data.length }</div>
          <div>Total Investors: {users.isLoading ? <Spinner size='.7rem' /> : investor}</div>
          {/* <div>Overall Balance: {users.isLoading ? <Spinner size='.7rem' /> : balance} {users.data.currency}</div> */}
          <div>Admin: {users.isLoading ? <Spinner size='.7rem' /> : admin}</div>
        </div>
      </Header>
    {
    //check if user exist
    isLoading ? 
    (
      // set loading div
      <Loader_ />
    ) :
    (
      //check if empty
      users.data.length < 1 ?
      (
        <div style={{textAlign: 'center'}}>No Users Currently Available</div>
      ):
      (
        <AdminWrapper>
          <Table>
          <table>
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Date</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Role</th>
                    <th>Balance {users.data[0].currency}</th>
                    <th>Investor</th>
                    <th>AC/No</th>
                    <th>Verified</th>
                    <th>Blocked</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((user, i)=>{
                    return (
                      <tr key={user._id}>
                        <td>{i+1}</td>
                        <td>{moment(user.createdAt).calendar()}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>{user.isAdmin ? 'Admin' : 'User'}</td>
                        <td>{user.amount}</td>
                        <td>{user.hasInvested ? 'True' : 'False'}</td>
                        <td>{user.accountNumber}</td>
                        <td>{user.isVerified ? <VerifiedUserIcon style={{fontSize: '1rem', color: "var(--bright-color"}}/> : ''}</td>
                        <td onClick={()=>handleBlock(user._id, user.isBlcok)} style={{cursor: 'pointer', fontWeight: 'bold', color: user.isBlocked ? '#c20' : 'green'}}>
                          {
                            user.isBlocked ? "Unblock" : "Block"
                          }
                        </td>

                        <td onClick={()=>deleteUser(user._id)} style={{cursor: 'pointer', fontWeight: 'bold', color: '#c20'}}>Remove</td>
                      </tr>
                    )
                  })}
                </tbody>
          </table>
          </Table>
        </AdminWrapper>
      )
    )
    }    
    </>
  )
}

const Header = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  display: grid;
  grid-gap: 2;
  grid-template-columns: repeat( auto-fit, minmax(150px, 1fr) );

  .row{
    padding: 3px;
    font-size: .8rem;
    justify-self: center;
  }

  .search{
    width: 200px;
    height: 30px;
    border: 1px solid var(--major-color-purest);
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon{
    width:30px;
    background: var(--major-color-purest);
    height: 100%;
    display: flex;
    color:#fff;
    justify-content: center;
    align-items: center;
  }
  input{
    width: calc(100% - 30px);
    padding: 0 8px;
    border: none;

    &:focus{
      outline: none;
      // border: 2px solid green;
    }
  }
`

const Table = styled.div`
  padding: 10px;
  overflow: auto;
  margin: auto;


  ${ScrollBar()}

  table{
    font-size: .8rem;
    margin: auto;
    border-spacing: 0.5rem;
    height: 100%;
    border-collapse: collapse;
    width: 800px;
    text-align: left;
    cursor: default;
  }

  td, th {
    border: 1px solid #999;
    padding: 0.5rem;
    text-align: left;
    padding: 0.25rem;
  }

  th{
    background: var(--major-color-purest);
    color: #fff;
  }

  // td:first-child {
  //   background: red;
  // }

  tbody tr:hover {
    background: var(--major-color-30A);
  }

`

