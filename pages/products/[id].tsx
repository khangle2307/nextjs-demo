import { useRouter } from "next/router";

const DetailProduct = () => {
   const router = useRouter();
   const { id } = router.query;
   return (
      <div>
         Detail Product id : { id } 
      </div>
   );
}

export default DetailProduct;