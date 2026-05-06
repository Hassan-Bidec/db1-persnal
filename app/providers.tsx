'use client'

import React from 'react'
import { CartProvider } from "../app/src/Context/CartContext"
import { WishlistProvider } from "../app/src/Context/WishlistContext"
import { UserProvider } from "../app/src/Context/UserContext"
import { BundleProvider } from '../app/src/Context/BundleContext'
import { GoogleOAuthProvider } from '@react-oauth/google'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GoogleOAuthProvider clientId='341574951595-7kmbo799rdp05d4dcjgn0vfkpfsrrs44.apps.googleusercontent.com'>
      <UserProvider>
        <CartProvider>
          <BundleProvider>
            <WishlistProvider>
              {children}
            </WishlistProvider>
          </BundleProvider>
        </CartProvider>
      </UserProvider>
    </GoogleOAuthProvider>
  )
}
