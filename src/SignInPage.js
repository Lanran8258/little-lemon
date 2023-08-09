import GeneralHeader from './GeneralHeader.js';
import SignInForm from './SignInForm.js';

const SignInPage = () => {
    return (
        <div className='signInPageContainer'>
            <div className='bookingHeader'>
                <GeneralHeader />
            </div>
            <div>
                <SignInForm />
            </div>
            
        </div>
        
    )
}

export default SignInPage;