import React from 'react'
import { SEO } from '../components'
import { Button, Purchase } from '../styles/components'
import { Link } from 'gatsby'

export default function thanks() {
  return (
    <div>
      <SEO title='Sucessful purchase' />
      <Purchase>
        <h2>Sucessful purchase</h2>
        <p>Enjoy your swag, wear it proud</p>
        <span rol='img' aria-label='heart emoji'>❤️</span>
        
        <Link to='/'>
          <Button>Continue shopping</Button>
        </Link>
      </Purchase>
    </div>
  )
}
