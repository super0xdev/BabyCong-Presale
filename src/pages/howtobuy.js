const HowtoBuy = () => {
    return (
        <div className="w-full bg-[#2F313E]">
            <div className="w-full rounded-b-[100px] fredoka text-4xl font-bold text-white bg-[#00ACFF] text-center py-8">How to Buy $BABYCONG</div>
            <div className="flex justify-center pt-16 pb-8" style={{ background: '#2F313E' }}>
                <div className="w-full flex flex-col px-2 text-white" style={{ maxWidth: '1024px' }}>
                    <div className="flex items-center gap-6 p-4 rounded-[100px] w-[280px]" style={{ border: 'solid 1px #00ACFF' }}>
                        <img src='https://chancer.com/wp-content/uploads/2023/05/icon-wallet.png' />
                        <span className="text-2xl roboto"><span className="text-[#00ACFF]">Install</span> Wallet</span>
                    </div>
                    <span className="pt-8">To safely buy and store the $CHANCER token, you will need to install a top rated wallet. If purchasing on mobile we recommend Trust Wallet. If on desktop we recommend MetaMask.</span>
                </div>
            </div>
        </div>
    )
}

export default HowtoBuy;