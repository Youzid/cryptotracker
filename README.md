
# ๐Cryptotracker๐
A modern CryptoCurrencies details tracker and a 3d Nft Showcase, Managed the API data to be up to date with an optimized fetching using Nextjs SSR and Redux Query. Linked the canvas camera and lights to the scroll to create a cinematic scrolling experience.


## ๐ธ Screenshots ๐ธ

![App Screenshot](https://iili.io/HWSyn6J.md.png%22/468x300?text=App+Screenshot+Here)
![App Screenshot](https://iili.io/HWSyCGa.md.png%22/468x300?text=App+Screenshot+Here)



## ๐ด Demo ๐ด

https://cryptotracker-youzid.vercel.app

##

## ๐จโ๐ป Tech Stack ๐จโ๐ป

Next.Js, Redux, Typescript, Tailwind Framer, Three.Js, chart.Js, APIintegration, sanity

## ๐ชChallenges๐ช


   -L๐ถ๐บ๐ถ๐๐ฒ๐ฑ ๐ณ๐ฒ๐๐ฐ๐ต๐ถ๐ป๐ด ๐ฟ๐ฒ๐พ๐๐ฒ๐๐๐ ๐ฝ๐ฒ๐ฟ ๐๐ฒ๐ฐ๐ผ๐ป๐ฑ :
trying to fetch the coins charts details multiple times in one second was beyond the free API plan , so every time i load crypto the data i get only a few coins details
โ๏ธSolutionโ๏ธ : using redux query  retry properties managed to refetch data on fail

   -๐๐ถ๐ป๐ธ๐ถ๐ป๐ด ๐๐ต๐ฒ ๐๐ฐ๐ฟ๐ผ๐น๐น ๐๐ผ ๐๐ต๐ฒ ๐ฐ๐ฎ๐บ๐ฒ๐ฟ๐ฎ ๐บ๐ผ๐๐บ๐ฒ๐ป๐ :
it looked easy at the beginning , then after using Drei's scroll control i noticed that it's not possible to set camera positions based on the scroll offset variable only , also the 2d elements weren't synchronised  with the 3d ones , 
โ๏ธSolutionโ๏ธ : i switched to scroll snapping to control the user experience and managed to orchestrate the camera positions with the 2d elments using a new library called "Jongleur", which had a few rendering problems i managed to fix with the creator.
 



## ๐ง Feedback ๐ง

If you have any feedback, please reach out to me at

-linkedin.com/in/youcefbenbouzid            
-you.benbouzid@gmail.com 
