// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { sanityClient } from "../../sanity";

const query = `*[_type == "nft"] {
  _id,
    ...
  }`;

type Data = {
  nfts: Nft[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const nfts = await sanityClient.fetch(query);

  res.status(200).json({ nfts });
}
