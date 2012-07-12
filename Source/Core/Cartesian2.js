/*global define*/
define([
        './DeveloperError'
       ],function(
         DeveloperError) {
    "use strict";

    /**
     * A 2D Cartesian point.
     * @alias Cartesian2
     * @constructor
     *
     * @param {Number} [x=0] The X component.
     * @param {Number} [y=0] The Y component.
     *
     * @see Cartesian3
     * @see Cartesian4
     */
    var Cartesian2 = function(x, y) {

        /**
         * The Y component.
         * @type Number
         */
        this.x = (typeof x !== 'undefined') ? x : 0.0;

        /**
         * The X component.
         * @type Number
         */
        this.y = (typeof y !== 'undefined') ? y : 0.0;
    };

    /**
     * Duplicates a Cartesian2 instance.
     * @memberof Cartesian2
     *
     * @param {Cartesian2} cartesian The Cartesian to duplicate.
     * @param {Cartesian2} [result] The object onto which to store the result.
     * @return {Cartesian2} The modified result parameter or a new Cartesian2 instance if none was provided.
     *
     * @exception {DeveloperError} cartesian is required.
     */
    Cartesian2.clone = function(cartesian, result) {
        if (typeof cartesian === 'undefined') {
            throw new DeveloperError('cartesian is required');
        }

        if (typeof result === 'undefined') {
            result = new Cartesian2();
        }

        result.x = cartesian.x;
        result.y = cartesian.y;
        return result;
    };

    /**
     * Creates a Cartesian2 instance from an existing Cartesian3.
     * @memberof Cartesian2
     * @function
     *
     * @param {Cartesian3} cartesian The Cartesian3 instance to create a Cartesian2 instance from.
     * @param {Cartesian2} [result] The object onto which to store the result.
     * @return {Cartesian2} The modified result parameter or a new Cartesian2 instance if none was provided.
     *
     * @exception {DeveloperError} cartesian is required.
     */
    Cartesian2.fromCartesian3 = Cartesian2.clone;

    /**
     * Creates a Cartesian2 instance from an existing Cartesian4.
     * @memberof Cartesian2
     * @function
     *
     * @param {Cartesian4} cartesian The Cartesian4 instance to create a Cartesian2 instance from.
     * @param {Cartesian2} [result] The object onto which to store the result.
     * @return {Cartesian2} The modified result parameter or a new Cartesian2 instance if none was provided.
     *
     * @exception {DeveloperError} cartesian is required.
     */
    Cartesian2.fromCartesian4 = Cartesian2.clone;

    /**
     * Computes the provided Cartesian's squared magnitude.
     * @memberof Cartesian2
     *
     * @param {Cartesian2} cartesian The Cartesian instance whose squared magnitude is to be computed.
     * @return {Number} The squared magnitude.
     *
     * @exception {DeveloperError} cartesian is required.
     */
    Cartesian2.magnitudeSquared = function(cartesian) {
        if (typeof cartesian === 'undefined') {
            throw new DeveloperError('cartesian is required');
        }
        return cartesian.x * cartesian.x + cartesian.y * cartesian.y;
    };

    /**
     * Computes the Cartesian's magnitude (length).
     * @memberof Cartesian2
     *
     * @param {Cartesian2} cartesian The Cartesian instance whose magnitude is to be computed.
     * @return {Number} The magnitude.
     *
     * @exception {DeveloperError} cartesian is required.
     */
    Cartesian2.magnitude = function(cartesian) {
        return Math.sqrt(Cartesian2.magnitudeSquared(cartesian));
    };

    /**
     * Computes the normalized form of the supplied Cartesian.
     * @memberof Cartesian2
     *
     * @param {Cartesian2} cartesian The Cartesian to be normalized.
     * @param {Cartesian2} [result] The object onto which to store the result.
     * @return {Cartesian2} The modified result parameter or a new Cartesian2 instance if none was provided.
     *
     * @exception {DeveloperError} cartesian is required.
     */
    Cartesian2.normalize = function(cartesian, result) {
        if (typeof cartesian === 'undefined') {
            throw new DeveloperError('cartesian is required');
        }

        if (typeof result === 'undefined') {
            result = new Cartesian2();
        }

        var magnitude = Cartesian2.magnitude(cartesian);
        result.x = cartesian.x / magnitude;
        result.y = cartesian.y / magnitude;
        return result;
    };

    /**
     * Computes the dot (scalar) product of two Cartesians.
     * @memberof Cartesian2
     *
     * @param {Cartesian2} left The first Cartesian.
     * @param {Cartesian2} right The second Cartesian.
     * @return {Number} The dot product.
     *
     * @exception {DeveloperError} left is required.
     * @exception {DeveloperError} right is required.
     */
    Cartesian2.dot = function(left, right) {
        if (typeof left === 'undefined') {
            throw new DeveloperError('left is required');
        }
        if (typeof right === 'undefined') {
            throw new DeveloperError('right is required');
        }
        return left.x * right.x + left.y * right.y;
    };

    /**
     * Computes the componentwise sum of two Cartesians.
     * @memberof Cartesian2
     *
     * @param {Cartesian2} left The first Cartesian.
     * @param {Cartesian2} right The second Cartesian.
     * @param {Cartesian2} [result] The object onto which to store the result.
     * @return {Cartesian2} The modified result parameter or a new Cartesian2 instance if none was provided.
     *
     * @exception {DeveloperError} left is required.
     * @exception {DeveloperError} right is required.
     */
    Cartesian2.add = function(left, right, result) {
        if (typeof left === 'undefined') {
            throw new DeveloperError('left is required');
        }
        if (typeof right === 'undefined') {
            throw new DeveloperError('right is required');
        }
        if (typeof result === 'undefined') {
            result = new Cartesian2();
        }
        result.x = left.x + right.x;
        result.y = left.y + right.y;
        return result;
    };

    /**
     * Computes the componentwise difference of two Cartesians.
     * @memberof Cartesian2
     *
     * @param {Cartesian2} left The first Cartesian.
     * @param {Cartesian2} right The second Cartesian.
     * @param {Cartesian2} [result] The object onto which to store the result.
     * @return {Cartesian2} The modified result parameter or a new Cartesian2 instance if none was provided.
     *
     * @exception {DeveloperError} left is required.
     * @exception {DeveloperError} right is required.
     */
    Cartesian2.subtract = function(left, right, result) {
        if (typeof left === 'undefined') {
            throw new DeveloperError('left is required');
        }
        if (typeof right === 'undefined') {
            throw new DeveloperError('right is required');
        }
        if (typeof result === 'undefined') {
            result = new Cartesian2();
        }
        result.x = left.x - right.x;
        result.y = left.y - right.y;
        return result;
    };

    /**
     * Multiplies the provided Cartesian componentwise by the provided scalar.
     * @memberof Cartesian2
     *
     * @param {Cartesian2} cartesian The Cartesian to be scaled.
     * @param {Number} scalar The scalar to multiply with.
     * @param {Cartesian2} [result] The object onto which to store the result.
     * @return {Cartesian2} The modified result parameter or a new Cartesian2 instance if none was provided.
     *
     * @exception {DeveloperError} cartesian is required.
     * @exception {DeveloperError} scalar is required and must be a number.
     */
    Cartesian2.multiplyWithScalar = function(cartesian, scalar, result) {
        if (typeof cartesian === 'undefined') {
            throw new DeveloperError('cartesian is required');
        }
        if (scalar === null || isNaN(scalar)) {
            throw new DeveloperError('scalar is required and must be a number.');
        }
        if (typeof result === 'undefined') {
            result = new Cartesian2();
        }
        result.x = cartesian.x * scalar;
        result.y = cartesian.y * scalar;
        return result;
    };

    /**
     * Divides the provided Cartesian componentwise by the provided scalar.
     * @memberof Cartesian2
     *
     * @param {Cartesian2} cartesian The Cartesian to be divided.
     * @param {Number} scalar The scalar to divide by.
     * @param {Cartesian2} [result] The object onto which to store the result.
     * @return {Cartesian2} The modified result parameter or a new Cartesian2 instance if none was provided.
     *
     * @exception {DeveloperError} cartesian is required.
     * @exception {DeveloperError} scalar is required and must be a number.
     */
    Cartesian2.divideByScalar = function(cartesian, scalar, result) {
        if (typeof cartesian === 'undefined') {
            throw new DeveloperError('cartesian is required');
        }
        if (scalar === null || isNaN(scalar)) {
            throw new DeveloperError('scalar is required and must be a number.');
        }
        if (typeof result === 'undefined') {
            result = new Cartesian2();
        }
        result.x = cartesian.x / scalar;
        result.y = cartesian.y / scalar;
        return result;
    };

    /**
     * Negates the provided Cartesian.
     * @memberof Cartesian2
     *
     * @param {Cartesian2} cartesian The Cartesian to be negated.
     * @param {Cartesian2} [result] The object onto which to store the result.
     * @return {Cartesian2} The modified result parameter or a new Cartesian2 instance if none was provided.
     *
     * @exception {DeveloperError} cartesian is required.
     */
    Cartesian2.negate = function(cartesian, result) {
        if (typeof cartesian === 'undefined') {
            throw new DeveloperError('cartesian is required');
        }
        if (typeof result === 'undefined') {
            result = new Cartesian2();
        }
        result.x = -cartesian.x;
        result.y = -cartesian.y;
        return result;
    };

    /**
     * Computes the absolute value of the provided Cartesian.
     * @memberof Cartesian2
     *
     * @param {Cartesian2} cartesian The Cartesian whose absolute value is to be computed.
     * @param {Cartesian2} [result] The object onto which to store the result.
     * @return {Cartesian2} The modified result parameter or a new Cartesian2 instance if none was provided.
     *
     * @exception {DeveloperError} cartesian is required.
     */
    Cartesian2.abs = function(cartesian, result) {
        if (typeof cartesian === 'undefined') {
            throw new DeveloperError('cartesian is required');
        }
        if (typeof result === 'undefined') {
            result = new Cartesian2();
        }
        result.x = Math.abs(cartesian.x);
        result.y = Math.abs(cartesian.y);
        return result;
    };

    /**
     * Compares the provided Cartesians componentwise and returns
     * <code>true/code> if they are equal, <code>false/code> otherwise.
     * @memberof Cartesian2
     *
     * @param {Cartesian2} [left] The first Cartesian.
     * @param {Cartesian2} [right] The second Cartesian.
     * @return {Boolean} <code>true/code> if left and right are equal, <code>false/code> otherwise.
     */
    Cartesian2.equals = function(left, right) {
        return (left === right) ||
               ((typeof left !== 'undefined') &&
                (typeof right !== 'undefined') &&
                (left.x === right.x) &&
                (left.y === right.y));
    };

    /**
     * Compares the provided Cartesians componentwise and returns
     * <code>true/code> if they are within the provided epsilon,
     * <code>false/code> otherwise.
     * @memberof Cartesian2
     *
     * @param {Cartesian2} [left] The first Cartesian.
     * @param {Cartesian2} [right] The second Cartesian.
     * @param {Number} epsilon The epsilon to use for equality testing.
     * @return {Boolean} <code>true/code> if left and right are within the provided epsilon, <code>false/code> otherwise.
     *
     * @exception {DeveloperError} epsilon is required and must be a number.
     */
    Cartesian2.equalsEpsilon = function(left, right, epsilon) {
        if (epsilon === null || isNaN(epsilon)) {
            throw new DeveloperError('epsilon is required and must be a number.');
        }
        return (left === right) ||
               ((typeof left !== 'undefined') &&
                (typeof right !== 'undefined') &&
                (Math.abs(left.x - right.x) <= epsilon) &&
                (Math.abs(left.y - right.y) <= epsilon));
    };

    /**
     * Creates a string representing the provided Cartesian in the format '(x, y)'.
     * @memberof Cartesian2
     *
     * @param {Cartesian2} cartesian The Cartesian to stringify.
     * @return {String} A string representing the provided Cartesian in the format '(x, y)'.
     *
     * @exception {DeveloperError} cartesian is required.
     */
    Cartesian2.toString = function(cartesian) {
        if (typeof cartesian === 'undefined') {
            throw new DeveloperError('cartesian is required');
        }
        return '(' + cartesian.x + ', ' + cartesian.y + ')';
    };

    /**
     * An immutable Cartesian2 instance initialized to (0.0, 0.0).
     * @memberof Cartesian2
     */
    Cartesian2.ZERO = Object.freeze(new Cartesian2(0.0, 0.0));

    /**
     * An immutable Cartesian2 instance initialized to (1.0, 0.0).
     * @memberof Cartesian2
     */
    Cartesian2.UNIT_X = Object.freeze(new Cartesian2(1.0, 0.0));

    /**
     * An immutable Cartesian2 instance initialized to (0.0, 1.0).
     * @memberof Cartesian2
     */
    Cartesian2.UNIT_Y = Object.freeze(new Cartesian2(0.0, 1.0));

    /**
     * Duplicates this Cartesian2 instance.
     * @memberof Cartesian2
     *
     * @param {Cartesian2} [result] The object onto which to store the result.
     * @return {Cartesian2} The modified result parameter or a new Cartesian2 instance if none was provided.
     */
    Cartesian2.prototype.clone = function(result) {
        return Cartesian2.clone(this, result);
    };

    /**
     * Computes this Cartesian's squared magnitude.
     * @memberof Cartesian2
     *
     * @return {Number} The squared magnitude.
     */
    Cartesian2.prototype.magnitudeSquared = function() {
        return Cartesian2.magnitudeSquared(this);
    };

    /**
     * Computes this Cartesian's magnitude (length).
     * @memberof Cartesian2
     *
     * @return {Number} The magnitude.
     */
    Cartesian2.prototype.magnitude = function() {
        return Cartesian2.magnitude(this);
    };

    /**
     * Computes the normalized form of this Cartesian.
     * @memberof Cartesian2
     *
     * @param {Cartesian2} [result] The object onto which to store the result.
     * @return {Cartesian2} The modified result parameter or a new Cartesian2 instance if none was provided.
     */
    Cartesian2.prototype.normalize = function(result) {
        return Cartesian2.normalize(this, result);
    };

    /**
     * Computes the dot (scalar) product of this Cartesian and a supplied cartesian.
     * @memberof Cartesian2
     *
     * @param {Cartesian2} right The right hand side Cartesian.
     * @return {Number} The dot product.
     *
     * @exception {DeveloperError} right is required.
     */
    Cartesian2.prototype.dot = function(right) {
        return Cartesian2.dot(this, right);
    };


    /**
     * Computes the componentwise sum of this Cartesian and the provided Cartesian.
     * @memberof Cartesian2
     *
     * @param {Cartesian2} right The right hand side Cartesian.
     * @param {Cartesian2} [result] The object onto which to store the result.
     * @return {Cartesian2} The modified result parameter or a new Cartesian2 instance if none was provided.
     *
     * @exception {DeveloperError} right is required.
     */
    Cartesian2.prototype.add = function(right, result) {
        return Cartesian2.add(this, right, result);
    };

    /**
     * Computes the componentwise difference of this Cartesian and the provided Cartesian.
     * @memberof Cartesian2
     *
     * @param {Cartesian2} right The right hand side Cartesian.
     * @param {Cartesian2} [result] The object onto which to store the result.
     * @return {Cartesian2} The modified result parameter or a new Cartesian2 instance if none was provided.
     *
     * @exception {DeveloperError} right is required.
     */
    Cartesian2.prototype.subtract = function(right, result) {
        return Cartesian2.subtract(this, right, result);
    };

    /**
     * Multiplies this Cartesian componentwise by the provided scalar.
     * @memberof Cartesian2
     *
     * @param {Number} scalar The scalar to multiply with.
     * @param {Cartesian2} [result] The object onto which to store the result.
     * @return {Cartesian2} The modified result parameter or a new Cartesian2 instance if none was provided.
     *
     * @exception {DeveloperError} scalar is required and must be a number.
     */
    Cartesian2.prototype.multiplyWithScalar = function(scalar, result) {
        return Cartesian2.multiplyWithScalar(this, scalar, result);
    };

    /**
     * Divides this Cartesian componentwise by the provided scalar.
     * @memberof Cartesian2
     *
     * @param {Number} scalar The scalar to divide by.
     * @param {Cartesian2} [result] The object onto which to store the result.
     * @return {Cartesian2} The modified result parameter or a new Cartesian2 instance if none was provided.
     *
     * @exception {DeveloperError} scalar is required and must be a number.
     */
    Cartesian2.prototype.divideByScalar = function(scalar, result) {
        return Cartesian2.divideByScalar(this, scalar, result);
    };

    /**
     * Negates this Cartesian.
     * @memberof Cartesian2
     *
     * @param {Cartesian2} [result] The object onto which to store the result.
     * @return {Cartesian2} The modified result parameter or a new Cartesian2 instance if none was provided.
     */
    Cartesian2.prototype.negate = function(result) {
        return Cartesian2.negate(this, result);
    };

    /**
     * Computes the absolute value of this Cartesian.
     * @memberof Cartesian2
     *
     * @param {Cartesian2} [result] The object onto which to store the result.
     * @return {Cartesian2} The modified result parameter or a new Cartesian2 instance if none was provided.
     */
    Cartesian2.prototype.abs = function(result) {
        return Cartesian2.abs(this, result);
    };

    /**
     * Compares this Cartesian against the provided Cartesian componentwise and returns
     * <code>true/code> if they are equal, <code>false/code> otherwise.
     * @memberof Cartesian2
     *
     * @param {Cartesian2} [right] The right hand side Cartesian.
     * @return {Boolean} <code>true/code> if they are equal, <code>false/code> otherwise.
     */
    Cartesian2.prototype.equals = function(right) {
        return Cartesian2.equals(this, right);
    };

    /**
     * Compares this Cartesian against the provided Cartesian componentwise and returns
     * <code>true/code> if they are within the provided epsilon,
     * <code>false/code> otherwise.
     * @memberof Cartesian2
     *
     * @param {Cartesian2} [right] The right hand side Cartesian.
     * @param {Number} epsilon The epsilon to use for equality testing.
     * @return {Boolean} <code>true/code> if left and right are within the provided epsilon, <code>false/code> otherwise.
     *
     * @exception {DeveloperError} epsilon is required and must be a number.
     */
    Cartesian2.prototype.equalsEpsilon = function(right, epsilon) {
        return Cartesian2.equalsEpsilon(this, right, epsilon);
    };

    /**
     * Creates a string representing this Cartesian in the format '(x, y)'.
     * @memberof Cartesian2
     *
     * @return {String} A string representing the provided Cartesian in the format '(x, y)'.
     */
    Cartesian2.prototype.toString = function() {
        return Cartesian2.toString(this);
    };

    return Cartesian2;
});
