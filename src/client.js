import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';



//conectamos le parte del cliente a nuestro servidor de sanity
export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
  });
  
  //para que podamos usar las imagenes de sanity
  const builder = imageUrlBuilder(client);
  


  export const urlFor = (source) => builder.image(source);
