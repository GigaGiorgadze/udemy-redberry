import { useRouter } from 'next/router'
import React from 'react'

function PortfolioProjectPage() {
    const router = useRouter()

    console.log(router.query)

    return (
        <div>
            <h1>Portfoli page pgaagaga</h1>
        </div>
    )
}
 
export default PortfolioProjectPage
