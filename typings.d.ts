interface Category {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "category";
  slug: {
    _type: "slug";
    current: string;
  };
  title: string;
}

interface Image {
  _key: string;
  _type: "image";
  asset: {
    
    url: string;
  };
}

interface Nft {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "product";
  title: string;
  price: number;
  slug: {
    _type: "slug";
    current: string; 
  };
  description: string;
  category: {
    _type: "reference";
    _ref: string;
  };
  image: Image[];
}
interface Coin {
  Volume24h:string
  btcPrice:string
  change:string
  coinrankingUrl:string
  color:string
  iconUrl:string
  listedAt:number
  lowVolume:boolean
  marketCap:string
  name:string
  price:string
  rank:number
  symbol:string
  tier:number
  uuid:string
}
interface Currencies {
  coins:Coin[]
  stats:{
    total:number,
    total24hVolume:string
    totalCoins:number,
    totalExchanges:number
    totalMarketCap:string,
    totalMarkets:number,
  }
} 

interface History {
  price:string,
  timestamp:number
}
interface HistoryCoin {
  change:string,
  history: History[]
}
interface StripeNft {
  id: string;
  amount_discount: number;
  amount_subtotal: number;
  amount_tax: number;
  amount_total: number;
  currency: string;
  description: string;
  object: string;
  quantity: number;
  price: {
    unit_amount: number;
  };
}