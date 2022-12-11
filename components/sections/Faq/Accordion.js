import React from 'react'
import { Collapse, Text, Grid } from '@nextui-org/react'

const Accordion = () => {
  return (
<Grid.Container gap={2}>
      <Grid>
        <Collapse.Group bordered>
          <Collapse title="Q: &nbsp;What is Super Superwall?">
            <Text>
            Superwall is a Social Media NFT Platform built to bring Entertainment, Branding, Marketing & Content Production all under one roof. We want to empower our Content Creators (Supers) with the ability to monetize their exclusive contents by creating an Entertain 2 Earn(E2E) & Play 2 Earn(P2E) ecosystem. Through the ecosystems we look to bridge Web 2.0 users to Web 3.0 so the transitioning may be smooth.
            </Text>
          </Collapse>
          <Collapse title="Q: &nbsp;What is Super Pass?">
            <Text>
            Super Pass is a collection of 1,111 Genesis Passes built on the Ethereum Network, which will
grant users exclusive benefits and access to the Superwall Ecosystem. Join us on our
journey in becoming one of the leading pioneers that strive to build the future of Web3
Entertainment Brick By Brick.
<Text>
<p className='font-bold items-center text-center'>- Super Pass -</p>
<p>Total Supply: 1111 Private: 100</p>
<p>OG: 300</p>
<p>WL: 600</p>
<p>Team Vault: 55 Marketing Vault: 56</p>
</Text>
            </Text>
          </Collapse>
          <Collapse title="Q: &nbsp;When is Phase 1 mint? (UTC) Phase 1: Supply - 250">
            <Text>
            Stage 1 (Private)<br /> Stage 2 (OG 24hrs) December 12th, 2022 12:00 PM<br/> Stage 3 (WL 24hrs) December 13th, 2022 12:00 PM<br/> Stage 4 (Public until mint out)

            </Text>
          </Collapse>
          <Collapse title="Q: &nbsp;What is mint price for Phase 1?">
            <Text>
            Stage 1 (Private 72hrs) - 0.2 eth <br/>Stage 2 (OG 24hrs) - 0.2 eth<br/>
Stage 3 (WL 24hrs) - 0.25 eth<br/>
Stage 4 (Public until mint out) - 0.3eth
            </Text>
          </Collapse>
          <Collapse title="Q: &nbsp;When does the other Super Pass Mint Phases Start?">
            <Text>
            Future Super Pass Mint Phases are TBA.
To stay up-to-date on future minting phases, Join us on Discord or follow us on Twitter.
            </Text>
          </Collapse>
          <Collapse title="Q: &nbsp;Am I guaranteed to mint?">
            <Text>
            Stage 1 - Guaranteed Mint for Private Sale Wallets.<br/>
Stage 2 - Guaranteed Mint for OG 1 per Wallet Submissions.<br/>
Stage 3 - First Come First Serve 1 per Wallet submitted.<br/>
Stage 4 - If there are remaining supplies for Phase 1, First Come First Serve Mint basis, No Cap on minting.
If you didn’t get to mint during Super Pass Phase 1 Mint, fret not, your WL will carry over and you will have the chance to mint during Phase 2, Phase 3 or Phase 4!
            </Text>
          </Collapse>
          <Collapse title="Q: &nbsp;Will I be able to mint from mobile?">
            <Text>
            Yes. If you are facing issues, please contact our team via opening a support ticket on Discord.
            </Text>
          </Collapse>
          <Collapse title="Q: &nbsp;Is the contract gas optimized?">
            <Text>
            Yes. The contract is built on ERC721A.
            </Text>
          </Collapse>
          <Collapse title="Q: &nbsp;AHow do I know if my wallet is registered?">
            <Text>
            Please create a ticket and our team can verify whether or not your wallet has been registered. If our ticketing system is at capacity, please wait and try again later.
            </Text>
          </Collapse>
          <Collapse title="Q: &nbsp;Is the Team Doxxed?">
            <Text>
            Yes. Key core members involved in the project at superwall are fully doxxed.
            </Text>
          </Collapse>
          <Collapse title="Q: &nbsp;How will the funds raised from the Super Pass be used?">
            <Text>
            1. Genesis Elemental Bricks - 20%<br />
2. Superwall Platform Development - 20% 3. Marketing - 20%<br />
4. Overhead Expenses - 20%<br />
5. Team Compensation - 20%<br />
            </Text>
          </Collapse>
        </Collapse.Group>
      </Grid>
    </Grid.Container>
  )
}

export default Accordion