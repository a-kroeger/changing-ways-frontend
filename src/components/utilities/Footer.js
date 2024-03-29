import React, { useEffect, useState } from 'react'

export default function Footer() {

    const [aboutText, setAboutText] = useState([])
    const [hotlines, setHotlines] = useState([])
    const [links, setLinks] = useState([])
    const [partners, setPartners] = useState([])

    useEffect(()=>{
        getHotlines();
        getLinks();
        getPartners();
    }, [])

    function getHotlines(){
        fetch('https://changing-ways-backend.herokuapp.com/api/hotlines')
        .then(response => response.json())
        .then(data => setHotlines(data.data))
    }

    function getLinks(){
        fetch('https://changing-ways-backend.herokuapp.com/api/links')
        .then(response => response.json())
        .then(data => setLinks(data.data))
    }

    function getPartners(){
        fetch('https://changing-ways-backend.herokuapp.com/api/partners?populate=*')
        .then(response => response.json())
        .then(data => setPartners(data.data))
    }

    return (
        <footer>
            <div className="about">
               <p>#203 5015 50th Avenue, Camrose, Alberta T4V 3P7</p>
                <div className="social-icons">
                    <a href="https://www.facebook.com/camrosechangingways">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a href="https://twitter.com/changing_ways">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    </a>
                </div>
            </div>
            <div className="footer-links">
                <div>
                    <p className="link-header">Hotlines</p>
                    {hotlines.map(hotline => (
                        <a key={hotline.id} href={`tel:${hotline.attributes.Phone}`}>{hotline.attributes.Name}</a>
                    ))}
                </div>
                <div>
                    <p className="link-header">Links</p>
                    {links.map(link => (
                        <a key={link.id} href={`${link.attributes.Link}`}>{link.attributes.Name}</a>
                    ))}
                </div>
            </div>
            <div className="partners">
                    {partners.map(partner => (
                        <a key={partner.id} href={partner.attributes.Link}>
                           <img src={`${partner.attributes.Logo.data.attributes.url}`} alt={partner.attributes.Title} />
                        </a>
                    ))}
            </div>
        </footer>
    )
}