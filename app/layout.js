import { Josefin_Slab } from 'next/font/google'
import "./style/style.css";

const JOSEFIN_REGULAR = Josefin_Slab({
  subsets : ['latin'],
  weight : ['500']
})

const JOSEFIN_SEMIBOLD = Josefin_Slab({
  subsets : ['latin'],
  weight : ['700']
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          Ali Nabizadeh | Portfolio
        </title>
      </head>
      <body className={JOSEFIN_SEMIBOLD.className}>
        {children}
        
        <script src="https://kit.fontawesome.com/79a164c540.js" crossorigin="anonymous"></script>
      </body>
    </html>
  );
}
