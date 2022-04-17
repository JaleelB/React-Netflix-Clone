import { Box,Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Accordion.scss'

const AccordionQuestions = () => {
    return (
        <Box className="accordion-container">
            <h1 className="accordion-title">Frequently Asked Questions</h1>
            <Box className="accordion-card-container">
                <Accordion className="accordion-card">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="expand-icon"/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>What is Netflix</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Netflix is a streaming service that offers a wide variety of award-winning TV shows,
                            movies, anime, documentaries, and more on thousands of internet-connected devices.
                        
                            You can watch as much as you want, whenever you want without a single commercial – all
                            for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="accordion-card">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="expand-icon"/>}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>How much does Netflix cost?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $19.99 a month. No extra costs, no contracts.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="accordion-card">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="expand-icon"/>}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography>Where can I watch?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                            <br/>
                            <br/>
                            You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="accordion-card"> 
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="expand-icon"/>}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                    >
                        <Typography>How do I cancel?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="accordion-card">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="expand-icon"/>}
                        aria-controls="panel5a-content"
                        id="panel5a-header"
                    >
                        <Typography>What can I watch on Netflix?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="accordion-card">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="expand-icon"/>}
                        aria-controls="panel6a-content"
                        id="panel6a-header"
                    >
                        <Typography>Is Netflix good for kids?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    )
}

export default AccordionQuestions;
