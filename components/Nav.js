import {
  useAccount,
  useConnect,
  useEnsName,
  configureChains,
  useDisconnect,
} from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { bsc, mainnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import Image from "next/image";
import truncateEthAddress from "truncate-eth-address";
import {
  DocumentDuplicateIcon,
  ArrowTopRightOnSquareIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline/";
import Link from "next/link";
import { Navbar, Button, Text } from "@nextui-org/react";

const NavBar = ({ mint }) => {
  if (process.browser) {
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn")

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
      modal.style.display ='block'
    }


    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
}

  const { chains } = configureChains([mainnet], [publicProvider()]);

  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { connect: connectMetamask } = useConnect({
    connector: new MetaMaskConnector({ chains: [mainnet] }),
  });
  const { connect: connectWalletConnect } = useConnect({
    connector: new WalletConnectConnector({ chains: [mainnet] }),
  });
  const { connect: connectCoinbase } = useConnect({
    connector: new CoinbaseWalletConnector({ chains: [mainnet] }),
  });

  const copy = async () => {
    try {
      let text = document.getElementById("select").innerHTML;
      await navigator.clipboard.writeText(text);
      console.log("copied");
    } catch (err) {
      console.log("failed", err);
    }
  };

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      imline: "nearest",
    });
  };

  return (
<>
<Navbar isBordered variant="sticky">
            <Navbar.Brand>
            <div className='hamburger'>
                   <style jsx>{`
        .hamburger {
          display: none;
        }
        @media only screen and (max-width: 480px) {
            .hamburger{ 
                display: flex;
             }
            }
            
            @media only screen and (max-width: 770px) {
                .hamburger{ 
                    display: flex;
                 }
              }
            
              @media only screen and (max-width: 900px) {
                .hamburger{ 
                    display: flex;
                 }
                 }
      `}</style>
             <Navbar.Toggle aria-label="toggle navigation" />
            </div>

          &nbsp;
          &nbsp;
          &nbsp;
              <a href="/">
          <Image
            className="w-28 md:w-40"
            src="/log.png"
            width={20}
            height={20}
          />
        </a>
            </Navbar.Brand>
            <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
              <Navbar.Link href="/#utility">Utility & Perks</Navbar.Link>
              <Navbar.Link isActive href="/#superdeal">
                Super deal
              </Navbar.Link>
              <Navbar.Link href="/#team">Super Team</Navbar.Link>
              <Navbar.Link href="/Mint">Mint</Navbar.Link>
              <Navbar.Link href="/#faq">FAQ</Navbar.Link>
              <Navbar.Link href="https://twitter.com/superwallglobal">        <div className="flex flex-row space-x-4">
          <a target='blank' href="https://twitter.com/superwallglobal">
            <Image
              className=" md:h-4 md:w-5"
              src="/twit.png"
              width={30}
              height={20}
            />
          </a>
          <a target='blank' href="https://www.instagram.com/superwall_official/">
            <Image
              className="md:h-4 md:w-5"
              src="/IG Icon.png"
              width={30}
              height={20}
            />
          </a>
          <a target='blank' href="https://discord.gg/cRbAWmADjv">
            <Image
              className=" md:h-4 md:w-5"
              src="/Discord Icon.png"
              width={30}
              height={20}
            />
          </a>
        </div></Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
            {isConnected ? (
            <button
              className="w-full rounded-xl bg-gradient-to-b from-pink-600 to-purple-600 font-bold cursor-pointer text-white p-2 m-4"
              id="myBtn"
            >
              {ensName ?? truncateEthAddress(address)}
            </button>
          ) : (
            <button
              className="w-full rounded-xl bg-gradient-to-b from-pink-600 to-purple-600 font-bold cursor-pointer text-white p-2 m-4"
              id="myBtn"
            >
              Connect Wallet
            </button>
          )}
            </Navbar.Content>
            <Navbar.Collapse>
              <Navbar.CollapseItem>
                <Link
                  color="inherit"
                  css={{
                    minWidth: "100%",
                  }}
                  href="/#utility"
                >
                   Utility & Perks
                </Link>
              </Navbar.CollapseItem>
              <Navbar.CollapseItem>
                <Link
                  color="inherit"
                  css={{
                    minWidth: "100%",
                  }}
                  href="/#superdeal"
                >
                   Super Deal
                </Link>
              </Navbar.CollapseItem>
              <Navbar.CollapseItem>
                <Link
                  color="inherit"
                  css={{
                    minWidth: "100%",
                  }}
                  href="/#team"
                >
                   Super Team
                </Link>
              </Navbar.CollapseItem>
              <Navbar.CollapseItem>
                <Link
                  color="inherit"
                  css={{
                    minWidth: "100%",
                  }}
                  href="/Mint"
                >
                   Mint
                </Link>
              </Navbar.CollapseItem>
              <Navbar.CollapseItem>
                <Link
                  color="inherit"
                  css={{
                    minWidth: "100%",
                  }}
                  href="/#faq"
                >
                   FAQ
                </Link>
              </Navbar.CollapseItem>
              <Navbar.CollapseItem>
                <Link
                  color="inherit"
                  css={{
                    minWidth: "100%",
                  }}
                  href="https://twitter.com/superwallglobal"
                >
                    <div className="flex flex-row space-x-4">
          <a target='blank' href="https://twitter.com/superwallglobal">
            <Image
              className=" md:h-4 md:w-5"
              src="/twit.png"
              width={30}
              height={20}
            />
          </a>
          <a target='blank' href="https://www.instagram.com/superwall_official/">
            <Image
              className="md:h-4 md:w-5"
              src="/IG Icon.png"
              width={30}
              height={20}
            />
          </a>
          <a target='blank' href="https://discord.gg/cRbAWmADjv">
            <Image
              className=" md:h-4 md:w-5"
              src="/Discord Icon.png"
              width={30}
              height={20}
            />
          </a>
        </div>
                </Link>
              </Navbar.CollapseItem>
          </Navbar.Collapse>
          </Navbar>

{isConnected ? (
            <div id="myModal" className="connected-modal relative">
              <div className="connected-modal-content md:w-6/12 md:h-56">
                <div className="connected-module">
                  <span className="close">&times;</span>
                  <p className="flex flex-col text-3xl md:text-4xl font-extrabold mb-3">
                    Connected
                  </p>
                  <div className="flex font-bold md:text-xl text-lg justify-center">
                    <Image
                      className="rounded-full w-6 h-6"
                      src={`https://avatars.dicebear.com/api/identicon/${
                        ensName ?? address
                      }.svg`}
                      width={150}
                      height={150}
                    />
                    &nbsp;&nbsp;&nbsp;
                    {ensName ?? truncateEthAddress(address)}
                    <span id="select" style={{ display: "none" }}>
                      {address}
                    </span>
                  </div>
                  <div className="flex text-sm md:text-md flex-row justify-around space-x-1 mt-8">
                    <div
                      onclick={() => copy}
                      className="hover:underline flex flex-row"
                    >
                      <DocumentDuplicateIcon className="w-4" />
                      Copy Address
                    </div>
                    <a
                      target="blank"
                      href={`https://bscscan.com/address/${address}`}
                    >
                      <div className="hover:underline flex flex-row">
                        <ArrowTopRightOnSquareIcon className="w-4" />
                        View on Bscsan
                      </div>
                    </a>
                  </div>
                  <button
                    className="w-lg md:w-auto md:top-40 md:left-44 absolute top-40 left-24 rounded-xl bg-gradient-to-b from-pink-600 to-purple-600 font-bold cursor-pointer hover:animate-pulse text-white p-2 m-4"
                    onClick={disconnect}
                  >
                    Disconnect
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div id="myModal" className="modal relative">
              <div className="modal-content">
                <div className="module">
                  <span className="close">&times;</span>
                  <div>
                    <p className="font-extrabold text-lg md:text-3xl">
                      Connect
                    </p>
                    <div className="flex ml-3 space-y-2 items-center text-center mt-2 flex-col md:mt-10 md:flex-row md:justify-between">
                      <div className=" hover:bg-blue-500 rounded-xl">
                        <Image
                        className="w-24 md:mt-5 cursor-pointer"
                        src="/Walletconnect.png"
                        onClick={connectWalletConnect}
                        width={50}
                        height={50}
                      />
                        </div>
                      <div className="relative hover:bg-blue-500 rounded-xl cursor-pointer">
                        <Image
                          className="w-24"
                          src="/Highlight Wallet.png"
                          onClick={connectMetamask}
                          width={100}
                          height={100}
                        />
                        <Image
                          className="absolute w-10 top-6 left-7 md:left-6"
                          src="/Meta.png"
                          onClick={connectMetamask}
                          width={50}
                          height={50}
                        />
                        <p className="absolute top-16 left-2 md:left-2 md:top-16 font-extrabold text-orange-600">
                          MetaMask
                        </p>
                      </div>
                      <div className="hover:bg-blue-500 rounded-xl">
                         <Image
                        className="w-18 cursor-pointer"
                        src="/Coinbase.png"
                        onClick={connectCoinbase}
                        width={50}
                        height={50}
                      />
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
</>

      )
    }

export default NavBar;
