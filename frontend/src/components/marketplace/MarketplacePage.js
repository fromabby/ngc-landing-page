import React from 'react'
import Card from './assets/Card'
import './marketplace.css'
import { Container, Row } from 'react-bootstrap'

const MarketplacePage = () => {
    return (
        <>
            <Container fluid className="p-0">
                <div className="marketplace">
                    <h1>MARKETPLACE</h1>
                    <Row>
                        <Card title={"Avatars"} link={"https://paras.id/collection/haute-gang-avatars-by-neargangcouturenear"} icon={"./assets/icons/Avatar.png"} background={"#538083"} />
                        <Card title={"Male Clothes"} link={"https://paras.id/collection/haute-gang-ciothes-by-neargangcouturenear"} icon={"./assets/icons/Male-Clothes.png"} background={"#586994"} />
                        <Card title={"Female Clothes"} link={"https://paras.id/collection/haute-gang-clothes-by-neargangcouturenear"} icon={"./assets/icons/Female-Clothes.png"} background={"#4A6C6F"} />
                        <Card title={"Masks"} link={"https://paras.id/collection/haute-gang-masks-by-neargangcouturenear"} icon={"./assets/icons/Masks.png"} background={"#A3E7FC"} />
                        <Card title={"Hats"} link={"https://paras.id/collection/haute-gang-hats-by-neargangcouturenear"} icon={"./assets/icons/Hat.png"} background={"#EFD2CB"} />
                        <Card title={"Necklaces"} link={"https://paras.id/collection/haute-gang-necklaces-by-neargangcouturenear"} icon={"./assets/icons/Necklace.png"} background={"#C2948A"} />
                        <Card title={"Earrings"} link={"https://paras.id/collection/haute-gang-earrings-by-neargangcouturenear"} icon={"./assets/icons/Earrings.png"} background={"#9F84BD"} />
                        <Card title={"Music"} link={"https://paras.id/collection/haute-gang-music-by-neargangcouturenear"} icon={"./assets/icons/Music.png"} background={"#E94F37"} />
                        <Card title={"Backgrounds"} link={"https://paras.id/collection/haute-gang-backgrounds-by-neargangcouturenear"} icon={"./assets/icons/Background.png"} background={"#ACF39D"} />
                        <Card title={"Collaboration Pieces"} link={"https://paras.id/collection/haute-gang-collaborations-by-neargangcouturenear"} icon={"./assets/icons/Avatar.png"} background={"#ACF39D"} />
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default MarketplacePage
