import React from 'react';
import { UserProvider } from './contexts/UserContext';
import ProfileList from './components/ProfileList';
import UserProfile from './components/UserProfile';

function App() {
    return (
        <>
        <UserProvider>
            <div className="App">
                <UserProfile />
                <ProfileList />
            </div>
        </UserProvider>
        <div>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            {/* other router paths */}
        </Switch>
    </div>
    </>
    );
}

export default App;
