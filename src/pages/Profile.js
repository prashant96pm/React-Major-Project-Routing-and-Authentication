// import { useAuth } from '../hooks';

const Profile = () => {
  // const auth = useAuth();
  return (
    <div>
      <h1>My Profile</h1>
      <h3>
        <b>Name:</b>
      </h3>
      <p>...{/* {auth.user.name} */}</p>
      <h3>
        <b>Email:</b>
      </h3>
      <p>...{/* {auth.user.email} */}</p>
    </div>
  );
};

export default Profile;
