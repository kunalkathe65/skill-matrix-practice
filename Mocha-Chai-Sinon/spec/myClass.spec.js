const MyClass = require('../src/myClass');
const myObj = new MyClass();

const sinon = require('sinon');
const nock = require('nock');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

//Test suite only for mocha and chaijs
describe.skip('MyClass chai expect testcases', () => {
  it('should add two numbers', () => {
    expect(myObj.add(2, 4)).to.be.equal(6);
  });

  it('should return an array', () => {
    expect(myObj.returnArray())
      .to.be.an('array')
      .that.does.not.include(8)
      .to.not.have.members([9, 10]);
  });

  it('should return an object', () => {
    const obj = myObj.returnObject();
    expect(obj).to.not.include({ company: 'Volansys' });
  });
});

//Test suite using sinon library for spy
describe.skip('MyClass sinon with spy testcases', () => {
  it('should spy on add method', () => {
    //creates a wrapper around actual method
    const spy = sinon.spy(myObj, 'add'); //it says spy add method
    myObj.callAnotherFunction(12, 12);
    // sinon.assert.calledOnce(spy);    //using sinon's assertion library
    expect(spy.calledOnce).to.be.true; //fail
    expect(spy.calledWith(10, 10)); //checks if method was called with arguments
  });

  it('should spy on callTheCallbackFunc', () => {
    const callback = sinon.spy(); //dummy callback
    myObj.callTheCallbackFunc(callback);
    expect(callback.calledOnce).to.be.true;
  });
});

//Test suite using sinon library for mock
//used when testing function is not dependent on another function
describe.skip('MyClass sinon with mock testcases', () => {
  it('should mock the sayHello method', () => {
    const mock = sinon.mock(myObj); //creates a wrapper around actual object do not mutate it
    const expectation = mock.expects('sayHello');
    expectation.exactly(1);
    // expectation.exactly(2); //fail
    myObj.callAnotherFunction(10, 20);
    expectation.verify();
  });
});

//Test suite using sinon library for stubs
//used when testing function is dependent on another function's result
describe.skip('MyClass sinon with mock testcases', () => {
  it('should stub the add method', () => {
    const stub = sinon.stub(myObj, 'add');
    stub.withArgs(10, 20).returns(100); //correct result is 30 but we expect it to be 100 i.e. overwritting func
    expect(myObj.callAnotherFunction(10, 20)).to.be.equal(100); //pass
  });

  it('should stub the add method but produce distinct results when called more than once', () => {
    const stub = sinon.stub(myObj, 'add');
    stub
      .withArgs(50, 50)
      .onFirstCall()
      .returns(500)
      .onSecondCall(1000)
      .returns(1000)
      .onThirdCall()
      .returns(1500);

    expect(myObj.callAnotherFunction(50, 50)).to.be.equal(500); //pass
    expect(myObj.callAnotherFunction(50, 50)).to.be.equal(1000); //pass
    expect(myObj.callAnotherFunction(50, 50)).to.be.equal(1500); //pass
  });
});

//testing promises using only chaijs
describe.skip('testing promises only using chaijs', function () {
  it('should test testPromise method', function (done) {
    // this.timeout(6000); //wait for max of 6 sec
    this.timeout(0); //wait forever i.e. till promise is not returned
    myObj.testPromise().then(function (result) {
      expect(result).to.be.equal(6);
      done();
    });
  });
});

//testing promises using only chai-as-promised library
describe.skip('testing promises only using chai-as-promised', function () {
  it('should test testPromise method using chai-as-promised library', function () {
    this.timeout(0);
    return expect(myObj.testPromise()).to.be.eventually.equal(6); //pass
    // return expect(myObj.testPromise()).to.be.eventually.equal(63); //fail
  });
});

//testing AJAX calls
describe.skip('testing xhr calls', function () {
  it('should test testXhrCall method', function (done) {
    //BELOW PART IS WORKING

    // myObj.testXhrCall().then((res) => {
    //   console.log(res);
    //   done();
    // });

    //NOT WORKING!!

    //intercepting actual AJAX call using nock
    const scope = nock('https://api.github.com')
      .get('/repos/atom/atom/license')
      .reply(200, {
        //mocking the reply from xhr call (not hitting actual API)
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
      });

    myObj
      .testXhrCall()
      .then(function (res) {
        expect(res).to.be.equal({
          license: {
            key: 'mit',
            name: 'MIT License',
            spdx_id: 'MIT',
            url: 'https://api.github.com/licenses/mit',
            node_id: 'MDc6TGljZW5zZTEz',
          },
        });
        done();
      })
      .catch((err) => {
        done(new Error('Failed!', err));
      });
  });
});

//Mocha hooks
describe.skip('mocha hooks', () => {
  after(() => {
    console.log('AFTER TEST SUIT');
  });
  before(() => {
    console.log('BEFORE TEST SUIT');
  });
  afterEach(() => {
    // console.log('AFTER EVERY TEST CASE');
    sinon.restore(); //restore sinon after every test case
  });
  beforeEach(() => {
    console.log('BEFORE EVERY TEST CASE');
  });

  it('spy add - 1', () => {
    const spy = sinon.spy(myObj, 'add');
    myObj.add(4, 4);
    expect(spy.calledOnce).to.be.true;
    // sinon.restore();  //we need to write this at the end of every test case that's where hooks can help
  });

  it('spy add - 2', () => {
    const spy = sinon.spy(myObj, 'add');
    myObj.add(4, 4);
    expect(spy.calledTwice).to.be.false;
  });
});
