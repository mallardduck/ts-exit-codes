import { suite, test } from '@testdeck/mocha';
import * as _chai from 'chai';
import { mock, instance } from 'ts-mockito';
import {BashExitCodes} from "../src/bash-exit-codes";
import {ExitCodeDescriptions} from "../src/exit-code-descriptions";

_chai.should();
@suite class BashExitsTest {
    private exitCodeDescriptions: ExitCodeDescriptions;

    before() {
        this.exitCodeDescriptions = ExitCodeDescriptions.create();
    }

    @test 'can get a basic codes'() {
        _chai.expect(BashExitCodes.General).to.be.equal(1);
        _chai.expect(BashExitCodes.CommandNotFound).to.be.equal(127);
    }

    @test 'can get code description'() {
        _chai.expect(this.exitCodeDescriptions.getDescription(BashExitCodes.General))
            .to.be.equal('Catchall for general errors');
        _chai.expect(this.exitCodeDescriptions.getDescription(BashExitCodes.CommandNotFound))
            .to.be.equal('Command not found; Possible problem with $PATH or a typo');
    }
}
