import './style.css'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useAccordionButton, AccordionContext } from 'react-bootstrap';
import { useContext } from 'react';


function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <div className='faq_header' onClick={decoratedOnClick}>
            <button>{isCurrentEventKey ? ' - ' : ' + '} </button>
            <h3>{children} </h3>
        </div>

    );
}

function FaqSection() {
    return (
        <div id='faq' className="faq_container">
            <div className='main_heading_wrapper'>
                <h1>FAQ<h2>FAQ</h2></h1>

            </div>            <div>
                <Accordion defaultActiveKey="">
                    <Card>
                        <Card.Header>
                            <ContextAwareToggle eventKey="0">What is NFT?</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>NFT stands for 'non-fungible token. An NFT is basically data that is accounted for in a digital ledger, and that data represents something specific and unique. An NFT can, for example, represent a unique piece of art or a game token.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <ContextAwareToggle eventKey="1">HOW MANY MAJESTIC BEARS WILL BE AVAILABLE?</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>8888. That’s the unique number of Majestic Bears our team has committed to creating. By prioritizing art quality over quantity, we make sure you will be happy with the art you mint. As a result, the demand for Majestic Bears will soon tower over the supply.
                                .</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <ContextAwareToggle eventKey="2">DO MAJESTIC BEARS HAVE ANY UTILITY?</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>Yes! Majestic Bears is one of the only projects in the NFT space that offer a
                                wide array of utilities. Majestic Bears will get to partake in exclusive real-life events.
                                They’ll help us make donations to charity that protects the polar bears in the islands
                                of the Canadian Arctic AND all the Majestic Bears models are equipped to be used in
                                movies, games and meet-ups in the Metaverse.
                                More will be revealed as the Prime Apes march ahead on the Roadmap.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <ContextAwareToggle eventKey="3">
                                WHEN WILL THE COLLECTION DROP?</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>End of February, the exact date will be announced soon in our discord.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </div>


    )
}

export default FaqSection;