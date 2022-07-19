import { configureStore } from '@reduxjs/toolkit';
import configReducer from './admin/config';
import authReducer from './auth/auth';
import plansReducer from './investmentPlans/investmentPlans';
import testimonialReducer from './testimonials/testimonials';


// redux store
export const store = configureStore({
    reducer: {
        auth: authReducer,
        config: configReducer,
        plans: plansReducer,
        testimonial: testimonialReducer,
    }
});

