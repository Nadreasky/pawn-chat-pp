import { connect } from 'react-redux';

import SignIn from '../../components/sign-in/signin.component';

import { emailSignInRequest } from '../../redux/user/user.actions';

const mapDispatchToProps = dispatch => ({
    signInWithEmail: userCredentials => dispatch(emailSignInRequest(userCredentials))
});

const SignInContainer = connect(null, mapDispatchToProps)(SignIn);
export default SignInContainer;
