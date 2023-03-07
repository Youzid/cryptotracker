
# 🌐Spotify🌐
A modern CryptoCurrencies details tracker and a 3d Nft Showcase, Managed the API data to be up to date with an optimized fetching using Nextjs SSR and Redux Query. Linked the canvas camera and lights to the scroll to create a cinematic scrolling experience.


## 📸 Screenshots 📸

![App Screenshot](https://iili.io/HWSyn6J.md.png%22/468x300?text=App+Screenshot+Here)
![App Screenshot](https://iili.io/HWSyCGa.md.png%22/468x300?text=App+Screenshot+Here)



## 🔴 Demo 🔴

https://cryptotracker-youzid.vercel.app

##

## 👨‍💻 Tech Stack 👨‍💻

Next.Js, Redux, Typescript, Tailwind Framer, Three.Js, chart.Js, APIintegration, sanity

## 💪Challenges💪


   L𝗶𝗺𝗶𝘁𝗲𝗱 𝗳𝗲𝘁𝗰𝗵𝗶𝗻𝗴 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀 𝗽𝗲𝗿 𝘀𝗲𝗰𝗼𝗻𝗱 :
trying to fetch the coins charts details multiple times in one second was beyond the free API plan , so every time i load crypto the data i get only a few coins details
✔️Solution✔️ : using redux query  retry properties managed to refetch data on fail

   𝗟𝗶𝗻𝗸𝗶𝗻𝗴 𝘁𝗵𝗲 𝘀𝗰𝗿𝗼𝗹𝗹 𝘁𝗼 𝘁𝗵𝗲 𝗰𝗮𝗺𝗲𝗿𝗮 𝗺𝗼𝘃𝗺𝗲𝗻𝘁 :
it looked easy at the beginning , then after using Drei's scroll control i noticed that it's not possible to set camera positions based on the scroll offset variable only , also the 2d elements weren't synchronised  with the 3d ones , 
✔️Solution✔️ : i switched to scroll snapping to control the user experience and managed to orchestrate the camera positions with the 2d elments using a new library called "Jongleur", which had a few rendering problems i managed to fix with the creator.
 



## 📧 Feedback 📧

If you have any feedback, please reach out to me at

-linkedin.com/in/youcefbenbouzid            
-you.benbouzid@gmail.com 
