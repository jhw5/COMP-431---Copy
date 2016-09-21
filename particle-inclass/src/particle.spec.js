import { expect } from 'chai'
import particle from './particle'
import { update } from './particle'

describe('Particle Functionality', () => {

    it('should have default values', () => {
        const p = particle({})
        expect(p).to.be.ok
        expect(p.missingAttribute).to.not.be.ok
        expect(p.mass).to.not.be.undefined
        expect(p.acceleration).to.not.be.undefined
        expect(p.velocity).to.not.be.undefined
        expect(p.position).to.not.be.undefined
        // check position, velocity, acceleration, mass
    })

    it('should update the position by the velocity', () => {
        const p = particle({})
        p.mass = 4
        p.position = [1, 1]
        p.velocity = [0.5, 0.5]

        const { position } = update(p, 1.0)
        expect(position).to.equal([1.5, 0.5])
    })

    it('should update the position by the velocity and time delta', () => {
        const p = particle({})
        p.position = [1, 1]
        p.velocity = [0.5, -0.5]

        const { position } = update(p, 2.0) // dt is different here
        expect(position).to.equal([2.0, 0.0])
    })

    it('should update the velocity by the acceleration', () => {
        // similar to the previous check
        const p = particle({})
        p.mass = 4

        p.acceleration = [1, 1]
        p.velocity = [0.5, -0.5]

        const { velocity } = update(p, 2.0) // velocity is different here
        expect(velocity).to.equal([2.0, 0.0])
    })

    it('particles should wrap around the world', () => {
        // create a particle with position outside
        // of the canvas area.  update() should
        // bring the particle back inside
        // check all four sides


        const canvas = document.getElementById('app')
        const p = particle({})
        p.mass = 4

        p.position = [0, -1]
        p.velocity = [0.5, -0.5]

        const { position } = update(p)
        expect(position).to.be.above([0,0]);
        expect(position).to.be.below([canvas.width, canvas.height])
    })
})



