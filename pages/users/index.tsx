import axios from 'axios';
import {GetStaticProps} from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ListUser = ( { users }) => {
   console.log(users);
   return (
      <div>
         <Head>
            <title>List User</title>
         </Head>
         <h1>List user</h1>
         <div className='flex flex-wrap space-x-4 space-y-4'>
            {users.map((item : any) => {
               return <div key={item.id} className="">
               <p>{item.name}</p>
               <p>{item.email}</p>
               <p>{item.phone}</p>
            </div>
            })}
         </div>
         
      </div>
   );
}

export const getStaticProps:GetStaticProps = async (ctx) => {
   const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
   console.log(data);
   
   return {
      props:{
         users: data
      }
   }
}

export default ListUser;