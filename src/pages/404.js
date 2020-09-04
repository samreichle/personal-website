import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout.js';
import NotFound from '../styles/notFound.module.scss'



const NotFoundPage = () => (
    <Layout>
      <div>
        <div>
          <h1 className={NotFound.content}>404</h1>
          <p className={NotFound.content}>It looks like the webpage you’re trying to reach does not exist.</p>
          <Link to="/" className={NotFound.content}>
            Back To Homepage
          </Link>
        </div>
      </div>
    </Layout>
  );
  
  export default NotFoundPage;