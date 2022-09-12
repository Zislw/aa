import React from 'React'
import Manager from '../components/Manager'
import { shallow } from 'enzyme'
import { Console } from 'console'

describe('all tests', () => {
    it('check state', () => {
        let comp = shallow(<Manager />)
        let result = (comp.state() as any).manager
        expect(result).toEqual(false)
    })

    it('check iammanager function', () => {
        let comp = shallow(<Manager/>)

        //     let nametxt = comp.find('input.m-name')
        //     nametxt.simulate('change', { target: { value: 'naomy' } })


        // let passwordtxt = comp.find('input.m-password')
        // nametxt.simulate('change', { target: { value: '8731' } })

        let btn = comp.find('button.btn')

        //איך שולחים כמה פרמטרים לפונקציה?
        btn.simulate('click',['naomy',"8731"])
        let result = (comp.state() as any).manager
        console.log(result);
        
        expect(result).toEqual(true)
    })


})
