import React from 'react'
import { Container } from 'react-bootstrap'
import './faqs.css'

const Faqs = () => {
    const list = ['Clothes Number',
        'Face Number',
        'Hat Number',
        'Necklace Number',
        'Earrings Number',
        'Music Number',
        'Background Number']
    return (
        <>
            <Container fluid className='p-0'>
                <div style={{ background: '#170c42', color: '#fff', padding: '50px' }}>
                    <h3 className="faqs-header highlight purple pb-0 mb-4">FAQs</h3>
                    <details>
                        <summary>
                            How do I merge my assets together?
                        </summary>
                        <div>
                            <ul>
                                <li>
                                    Patron Buys from Collection:
                                    <br />
                                    <p>
                                    The Patron must own 1 Base Character and an additional 3 accessories for it to be minted.
                                    </p>
                                </li>
                                <li>
                                Patron Submits Merge Ticket in the NGC Discord Server:
                                    <br />
                                    <p>
                                    The Patron must submit a merge ticket using the #👷-merge-ticket channel in the NGC Discord server.
                                    </p>
                                </li>
                                <li>
                                    Patron Must Provide the Following Information to Merge:<br />
                                    <p>
                                        Near Address<br />
                                        Base Character Number<br />
                                        Plus any 3 of the following:<br />
                                        <ul>
                                            {list.map(x => (
                                                <li>{x}</li>
                                            ))}
                                        </ul>
                                    </p>
                                </li>
                                <li>
                                    Patron Goes Through the Verification Process<br />
                                    <p>
                                    The team will need the patron to send a verification fee of .01N and proof of payment to the team to be verified.
                                    </p>
                                </li>
                                <li>
                                    NGC Team Logs it in a Public Spreadsheet:<br />
                                    <p>
                                    The team will log in the information in a spreadsheet open for viewing to the public, and then the Near address will be recorded that will be used as the queue for who will receive their haute gang in that order. The release schedule will be 50 haute gang merging slots per week. The tickets submitted after the 50th log in a week will be used as the start of the queue for the next week.
                                    </p>
                                </li>
                                <li>
                                    NGC Team Mints and Transfers the Haute Gang<br />
                                    <p>
                                    After merging the assets, the team will then mint and transfer the haute gang to the given Near address.<br />
                                        <em>* A near address can only submit 1 ticket per merging cycle</em>

                                    </p>
                                </li>
                            </ul>
                        </div>
                    </details>
                    <details>
                        <summary>
                            How do I get Haute Gang verified?
                        </summary>
                        <div>
                            <ul>
                                <li>
                                    Patron Mints Haute Gang:<br />
                                    <p>The patron goes through the minting process.</p>
                                </li>
                                <li>
                                    Haute Gang Holder Submits Ticket in NGC Discord Server:<br />
                                    <p>The Haute Gang Holder must fill out the form in the #✅-verify-haute-gang channel in the NGC Discord server.</p>
                                </li>
                                <li>
                                    NGC Team Confirms Haute Gang of Holder:<br />
                                    <p>The team goes through a process to confirm that the Discord message is indeed from the Haute Gang Holder. The role “Haute Gang” is then given in the NGC Discord server.</p>
                                </li>
                            </ul>
                        </div>
                    </details>
                    <details>
                        <summary>
                        How do I get WL Holder verified?
                        </summary>
                        <div>
                            <ul>
                                <li>
                                Patron Gets a WL Ticket:<br/>
                                    <p>
                                    The patron gets a WL Ticket through <a className="faqs-link" href="https://paras.id/token/x.paras.near::168154">here</a> or through one of our giveaways.
                                    </p>
                                </li>
                                <li>
                                WL Ticket Holder Submits Ticket in NGC Discord Server:<br/>
                                    <p>The WL Ticket Holder must fill out the form in the #✅-verify-whitelist channel in the NGC Discord server.</p>
                                </li>
                                <li>
                                NGC Team Confirms Whitelist Ticket of Holder:<br/>
                                    <p>The team will need the patron to send a verification fee of .01N and proof of payment to the team to be verified. The role “WL Holder” is then given in the NGC Discord server.</p>
                                </li>
                            </ul>
                        </div>
                    </details>
                </div>
            </Container>
        </>
    )
}

export default Faqs

// FAQs:

// How do I merge my assets together?

// Patron Buys from Collection:
// The Patron must own 1 Base Character and an additional 3 accessories for it to be minted.
// Patron Submits Merge Ticket in the NGC Discord Server:
// The Patron must submit a merge ticket using the #👷-merge-ticket channel in the NGC Discord server.
// Patron Must Provide the Following Information to Merge:
// Near Address
// Base Character Number
// Plus any 3 of the following:
// Clothes Number
// Face Number
// Hat Number
// Necklace Number
// Earrings Number
// Music Number
// Background Number
// Patron Goes Through the Verification Process
// The team will need the patron to send a verification fee of .01N and proof of payment to the team to be verified.
// NGC Team Logs it in a Public Spreadsheet:
// The team will log in the information in a spreadsheet open for viewing to the public, and then the Near address will be recorded that will be used as the queue for who will receive their haute gang in that order. The release schedule will be 50 haute gang merging slots per week. The tickets submitted after the 50th log in a week will be used as the start of the queue for the next week.
// NGC Team Mints and Transfers the Haute Gang:
// After merging the assets, the team will then mint and transfer the haute gang to the given Near address.
// * A near address can only submit 1 ticket per merging cycle








// How do I get Haute Gang verified?

// Patron Mints Haute Gang:
// The patron goes through the minting process.

// Haute Gang Holder Submits Ticket in NGC Discord Server:
// The Haute Gang Holder must submit a verification ticket using the #✅-verify-haute-gang channel in the NGC Discord server.

// NGC Team Confirms Haute Gang of Holder:
// The team goes through a process to confirm that the Discord message is indeed from the Haute Gang Holder. The role “Haute Gang” is then given in the NGC Discord server.

// How do I get WL Holder verified?

// Patron Gets a WL Ticket:
// The patron gets a WL Ticket through here: https://paras.id/token/x.paras.near::168154 or through one of our giveaways.

// WL Ticket Holder Submits Ticket in NGC Discord Server:
// The WL Ticket Holder must submit a verification ticket using the #✅-verify-whitelist channel in the NGC Discord server.

// NGC Team Confirms Whitelist Ticket of Holder:
// The team will need the patron to send a verification fee of .01N and proof of payment to the team to be verified. The role “WL Holder” is then given in the NGC Discord server.
