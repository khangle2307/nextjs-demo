import Head from "next/head";
import Link from "next/link";
import React from "react";

const ListProduct: React.FC = () => {
  return (
    <div>
      <Head>
        <title>List product</title>
      </Head>
      <div>
        <Link href={"/products/1"}>
          product 1
        </Link>
        <Link href={"/products/2"}>
          product 2
        </Link>
        <Link href={"/products/3"}>
          product 3
        </Link>
      </div>
    </div>
  );
}

export default ListProduct;