"use client"

import { User } from "@prisma/client";

interface UserBoxProps {
  data: User
}

const UserBox:React.FC<UserBoxProps> = ({data}) => {
  return <div>UserBox</div>;
};

export default UserBox;
