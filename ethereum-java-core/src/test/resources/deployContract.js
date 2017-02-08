var identifier = "Test Contract" ;
var rentcarContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"ValidateTravel","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"GetBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"StartRent","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[],"name":"RentMe","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"user","outputs":[{"name":"addr","type":"address"},{"name":"valid","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"X","type":"uint256"},{"name":"Y","type":"uint256"}],"name":"GoTo","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"GetPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"StopRent","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"who","type":"address"}],"name":"submitted","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"validatedPaymt","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"car","outputs":[{"name":"addr","type":"address"},{"name":"valid","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"answ","type":"uint8[3]"}],"name":"submit","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"inputs":[{"name":"identifier","type":"bytes32"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"state","type":"uint256"}],"name":"OnStateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"identifier","type":"bytes32"}],"name":"OnCreated","type":"event"}]);
var rentcar = rentcarContract.new(
   identifier,
   {
     from: web3.eth.accounts[0],
     data: '0x6060604052341561000c57fe5b604051602080610b64833981016040528080519060200190919050505b60006005819055506000600660006101000a81548160ff0219169083151502179055506702c68af0bb14000060038190555033600260000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160000160146101000a81548160ff0219169083151502179055506000600260000160146101000a81548160ff0219169083151502179055506100f860006101336401000000000261096e176401000000009004565b80600019167f2693c233eedd377b05c84aa5d546ed3ecf9d58e5d3ecfcf8c9b5d98aaa0243d860405180905060405180910390a25b50610177565b806000819055507f912ea462c8f766ba4c4d483188d54606373cd0a6b6cbe1069fbbd0d388103da36000546040518082815260200191505060405180910390a15b50565b6109de806101866000396000f300606060405236156100c3576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630175c290146100c557806343e2e504146100cf5780634711c55c146101195780634c0004e5146101235780634f8632ba1461013557806355289e61146101925780636d90164e146101bb578063c19d93fb146101e1578063c45b2aa114610207578063c5bb37e214610219578063d2932c2d14610267578063ee26fac314610291578063f98640c4146102ee575bfe5b6100cd610349565b005b34156100d757fe5b610103600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061062f565b6040518082815260200191505060405180910390f35b610121610651565b005b341561012b57fe5b610133610679565b005b341561013d57fe5b6101456106ca565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001821515151581526020019250505060405180910390f35b341561019a57fe5b6101b96004808035906020019091908035906020019091905050610709565b005b34156101c357fe5b6101cb610784565b6040518082815260200191505060405180910390f35b34156101e957fe5b6101f161078f565b6040518082815260200191505060405180910390f35b341561020f57fe5b610217610795565b005b341561022157fe5b61024d600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610861565b604051808215151515815260200191505060405180910390f35b341561026f57fe5b6102776108b8565b604051808215151515815260200191505060405180910390f35b341561029957fe5b6102a16108cb565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001821515151581526020019250505060405180910390f35b34156102f657fe5b61032f6004808060600190600380602002604051908101604052809291908260036020028082843782019150505050509190505061090a565b604051808215151515815260200191505060405180910390f35b600160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806103f85750600260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1561062757600160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148015610473575060001515600160000160149054906101000a900460ff161515145b15610497576001600160000160146101000a81548160ff0219169083151502179055505b600260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614801561050d575060001515600260000160149054906101000a900460ff161515145b1561053b576001600260000160146101000a81548160ff02191690831515021790555061053a600361096e565b5b60011515600160000160149054906101000a900460ff161515148015610577575060011515600260000160149054906101000a900460ff161515145b15610621576000600160000160146101000a81548160ff0219169083151502179055506000600260000160146101000a81548160ff021916908315150217905550600260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004549081150290604051809050600060405180830381858888f1935050505050610620610795565b5b5b61062c565b610000565b5b565b60008173ffffffffffffffffffffffffffffffffffffffff163190505b919050565b6001600660006101000a81548160ff021916908315150217905550610676600261096e565b5b565b33600160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506106c7600161096e565b5b565b60018060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060000160149054906101000a900460ff16905082565b81600760000181905550806007600101819055506003546007600101546007600001540102600481905550600454600160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1631101561077f57610000565b5b5050565b600060045490505b90565b60005481565b600160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806108445750600260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1561085957610853600061096e565b5b61085e565b610000565b5b565b6000600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1690505b919050565b600660009054906101000a900460ff1681565b60028060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060000160149054906101000a900460ff16905082565b60006001600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600190505b919050565b806000819055507f912ea462c8f766ba4c4d483188d54606373cd0a6b6cbe1069fbbd0d388103da36000546040518082815260200191505060405180910390a15b505600a165627a7a7230582047c409c421f451663dfdc05f84d1807e639c946e3381a99a86c47adf3d22d3f50029',
     gas: '4700000'
   }, function (e, contract){
    console.log(e);
    if (typeof contract.address !== 'undefined') {
      console.log('CONTRACT{' + contract.address + '}');
      miner.stop();
    }
 })

miner.start();
