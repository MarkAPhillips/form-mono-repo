import { logger } from '@form/common';
import { Input } from '@form/components';
import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    logger('Testing monorepo!');
  }, []);

  return (
    <div>
      <header>
        <Input type="text" />
      </header>
    </div>
  );
}

export default Home;
