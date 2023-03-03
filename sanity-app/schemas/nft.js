
import {RiMacbookLine} from "react-icons/ri"

export default {
  name: 'nft',
  title: 'Nft',
  type: 'document',
  icon:RiMacbookLine,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of:[{type:"image"}],
      options:{
        hotspot: true,
      }
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      title: 'price',
      name: 'price',
      type: 'number',

    },

   
    
  ],

}
