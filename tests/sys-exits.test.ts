import { suite, test } from '@testdeck/mocha';
import * as _chai from 'chai';
import {SysExitCodes} from "../src/sys-exit-codes";
import {ExitCodeDescriptions} from "../src/exit-code-descriptions";

_chai.should();
@suite class SysExitsTest {
    private exitCodeDescriptions: ExitCodeDescriptions;

    before() {
        this.exitCodeDescriptions = ExitCodeDescriptions.create();
    }

    @test 'can get a basic codes'() {
        _chai.expect(SysExitCodes.Usage).to.be.equal(64);
        _chai.expect(SysExitCodes.CantCreate).to.be.equal(73);
        _chai.expect(SysExitCodes.NoPerm).to.be.equal(77);
    }

    @test 'can get code description'() {
        _chai.expect(this.exitCodeDescriptions.getDescription(SysExitCodes.Usage))
            .to.be.equal('The command was used incorrectly');
        _chai.expect(this.exitCodeDescriptions.getDescription(SysExitCodes.CantCreate))
            .to.be.equal('A (user specified) output file cannot be created');
        _chai.expect(this.exitCodeDescriptions.getDescription(SysExitCodes.NoPerm))
            .to.be.equal('You did not have sufficient permission to perform the operation');
    }
}
