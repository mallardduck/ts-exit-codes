import { suite, test } from '@testdeck/mocha';
import * as _chai from 'chai';
import {ExitCodes} from "../src/exit-codes";
import {ExitCodeDescriptions} from "../src/exit-code-descriptions";

_chai.should();
@suite class AllExitCodesTest {
    private exitCodeDescriptions: ExitCodeDescriptions;

    before() {
        this.exitCodeDescriptions = ExitCodeDescriptions.create();
    }

    @test 'can get a basic codes'() {
        _chai.expect(ExitCodes.Ok).to.be.equal(0);
        _chai.expect(ExitCodes.General).to.be.equal(1);
        _chai.expect(ExitCodes.Usage).to.be.equal(64);
        _chai.expect(ExitCodes.CantCreate).to.be.equal(73);
        _chai.expect(ExitCodes.NoPerm).to.be.equal(77);
        _chai.expect(ExitCodes.CommandNotFound).to.be.equal(127);
    }

    @test 'can get code description'() {
        _chai.expect(this.exitCodeDescriptions.getDescription(ExitCodes.Ok))
            .to.be.equal('Successful termination');
        _chai.expect(this.exitCodeDescriptions.getDescription(ExitCodes.General))
            .to.be.equal('Catchall for general errors');
        _chai.expect(this.exitCodeDescriptions.getDescription(ExitCodes.Usage))
            .to.be.equal('The command was used incorrectly');
        _chai.expect(this.exitCodeDescriptions.getDescription(ExitCodes.CantCreate))
            .to.be.equal('A (user specified) output file cannot be created');
        _chai.expect(this.exitCodeDescriptions.getDescription(ExitCodes.NoPerm))
            .to.be.equal('You did not have sufficient permission to perform the operation');
        _chai.expect(this.exitCodeDescriptions.getDescription(ExitCodes.CommandNotFound))
            .to.be.equal('Command not found; Possible problem with $PATH or a typo');
    }
}
