import React from 'react'

import ContactCard from './components/ContactCard'


function AppContactCard() {
    return(
        <div>
            <ContactCard 
            contact={{name:'kenan', phone:'3-5', mail:'meyil', imgUrl:'https://dummyimage.com/200x200/ba97ba/dafac8.png'}}
            />
            <ContactCard 
            contact={{name:'Mahmut', phone:'8 olur 9 olur', mail:'evet', imgUrl:'https://dummyimage.com/200x200/ba97ba/dafac8.png'}}
            />
        </div>
    )
}

export default AppContactCard