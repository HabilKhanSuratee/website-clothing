import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Collections } from "./pages/Collections";
import { CollectionDetail } from "./pages/CollectionDetail";
import { ProductDetail } from "./pages/ProductDetail";
import { Artisans } from "./pages/Artisans";
import { ArtisanProfile } from "./pages/ArtisanProfile";
import { About } from "./pages/About";
import { ForManufacturers } from "./pages/ForManufacturers";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "collections",
        Component: Collections,
      },
      {
        path: "collections/:id",
        Component: CollectionDetail,
      },
      {
        path: "collections/:collectionId/products/:productId",
        Component: ProductDetail,
      },
      {
        path: "artisans",
        Component: Artisans,
      },
      {
        path: "artisans/:id",
        Component: ArtisanProfile,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "for-manufacturers",
        Component: ForManufacturers,
      },
    ],
  },
], { basename: '/website-clothing' });
