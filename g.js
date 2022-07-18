{
    link.url === '/' ? 
    (
    <a href={link.url} onClick={closeMenu}>
        <div className={link.url === router.asPath ? 'side-menu-active-icon icon' : 'icon'}>
            {link.icon}
        </div>
        <div className={link.url === router.asPath ? 'side-menu-active-link link' : 'link'}>
            {link.link}
        </div>
    </a>
    ):
    (
    <Link href={link.url} passHref>
        <a onClick={closeMenu}>
            <div className={link.url === router.asPath ? 'side-menu-active-icon icon' : 'icon'}>
                {link.icon}
            </div>
            <div className={link.url === router.asPath ? 'side-menu-active-link link' : 'link'}>
                {link.link}
            </div>
        </a>
    </Link>
    )   
}