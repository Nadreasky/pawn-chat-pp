import { connect } from 'react-redux';

import SignUp from '../../components/sign-up/sign-up.component';

import { emailSignUpRequest } from '../../redux/user/user.actions';

const mapDispatchToProps = dispatch => ({
    signUp: userCredentials => dispatch(emailSignUpRequest(userCredentials))
});

const SignUpContainer = connect(null, mapDispatchToProps)(SignUp);
export default SignUpContainer;
