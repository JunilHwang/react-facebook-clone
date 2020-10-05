import React, { useState } from 'react';

export const useAuth = () => {
  const [users] = useState();
  const [user] = useState({
    seq: 1,
    name: 'JunilHwang',
    profileImageUrl:
      'https://avatars2.githubusercontent.com/u/18749057?s=460&u=014b7feee255469392f5e7cd40a7fcee6442ccf6&v=4',
  });

  return { user };
};
