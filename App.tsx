import React from 'react';
		import {View} from 'react-native';
		import ValiUser from './android/app/components/users/fb_Valiusers';
    import RegisterUser from './android/app/components/users/fb_Registeruser';
    import LoginUser from './android/app/components/users/fb_Loginuser';
    import LogoutUser from './android/app/components/users/fb_Logoutuser';

		const App = () => {
		  return (
			<View>
			  <LogoutUser />
			</View>
		  );
		};

		export default App;