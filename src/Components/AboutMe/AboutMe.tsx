import React from 'react';
import Container from '@mui/material/Container';
import "./AboutMe.css"
import { MobXExample } from '../CV/mobX';
import { observer } from 'mobx-react';


interface UserData {
    userStore: MobXExample
}

const AboutMe: React.FC<UserData> = observer(({ userStore }) => {
    return <div className='AboutMe'>
        <Container maxWidth="xl">
            <h1>About Me</h1>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, iure? Debitis laborum voluptate modi.
                Fugiat animi sequi placeat id provident in quo fugit molestiae deserunt laudantium assumenda officiis earum magnam,
                architecto veritatis sunt temporibus maxime voluptate? Enim perspiciatis reprehenderit hic quia quam!
                Tenetur nemo debitis dolorum reprehenderit? A vero qui ipsum repellendus delectus!
                Pariatur hic consectetur omnis eos voluptatibus placeat blanditiis at repellat.
                Repellendus quo amet quae? Aspernatur mollitia facere voluptatem atque perferendis dolorem necessitatibus neque nesciunt officia illo cum vero autem,
                architecto harum pariatur! Molestiae quia quisquam excepturi facere atque quas perferendis repellendus qui minus.
                Odit, ipsam. Veritatis est aliquid tempora hic quasi temporibus amet suscipit atque labore ratione expedita earum veniam doloribus praesentium numquam,
                dolores perferendis. Qui beatae quidem explicabo dolore adipisci cum voluptatem,
                labore cupiditate, dolor voluptatum ratione natus, perspiciatis vitae a voluptate odio aliquid vel sunt!
                Maiores adipisci officia eligendi tempore minus dolor omnis fugiat voluptas, consectetur voluptatibus dolorum,
                rem architecto optio magni quia dignissimos saepe, beatae libero totam voluptate id recusandae earum nobis?
                Iure voluptate sed molestiae porro, quas asperiores. Consequatur,
                vel quidem error est quaerat quos voluptatem dolores tempora eaque tenetur nulla dicta dolorem illo fugiat accusamus suscipit,
                iste sint ullam praesentium dolor facere amet iure delectus deleniti!
                Dolor iste quia veniam sunt fugit! Maiores, esse harum blanditiis consequatur quo fuga sunt cumque?
                Modi magnam ipsum sed quam suscipit eaque, temporibus repellendus pariatur id perferendis nulla nemo deserunt odio similique distinctio,
                ratione, fuga quos. Quo maxime quod ipsam aspernatur laborum, libero eos ullam possimus?</p> */}

            <ul>
                {userStore.userData.map(user => {
                    return <li key={Math.random()}>
                        {user.name + " " + user.lastName + " " + user.age}
                    </li>
                })}
            </ul>
        </Container>

    </div>;
})

export default AboutMe;
