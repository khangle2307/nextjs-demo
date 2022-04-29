import Head from "next/head";
import { useRouter } from "next/router";

const DetailProduct = () => {
   const router = useRouter();
   const { id } = router.query;
   return (
      <div>
         <Head>
            <title>Detail Product</title>
         </Head>
         <h1>
            Detail Product id : { id } 
         </h1>
      </div>
   );
}

export default DetailProduct;