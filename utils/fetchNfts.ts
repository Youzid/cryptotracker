export const fetchNfts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getNfts`
    );

  const data = await res.json();
  const nfts: Nft[] = data.nfts;
  return nfts;
};



// export const fetchNfts = async () => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/api/getNfts`
//     );

//   const data = await res.json();
//   const nfts: Nft[] = data.nfts;
//   return nfts;
// };
