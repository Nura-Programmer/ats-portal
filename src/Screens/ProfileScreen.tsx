const ProfileScreen = () => {
  return (
    <div className="min-w-full">
      <div className="navbar shadow-sm place-content-stretch mb-4">
        <a className="btn btn-ghost text-lg">Account Settings</a>
      </div>

      <div className="flex gap-6 px-6">
        <div className="avatar">
          <div className="w-20 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/wonderperson@192.webp" />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 absolute bottom-0 right-0 rounded-full bg-primary stroke-primary p-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
            />
          </svg>
        </div>
        <div className="flex-col">
          <ul>
            <li>
              <strong>Marry Doe</strong>
            </li>
            <li className="text-sm">marry@gmail.com</li>
          </ul>
        </div>
      </div>
      <p className="text-sm mx-4 p-4 border-b border-dashed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        voluptate fugiat, voluptates, odio doloribus animi ad quidem dignissimos
        necessitatibus, eligendi provident consectetur dolore.
      </p>
    </div>
  );
};

export default ProfileScreen;
