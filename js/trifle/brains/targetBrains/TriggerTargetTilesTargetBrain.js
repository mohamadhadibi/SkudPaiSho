
Trifle.TriggerTargetTilesTargetBrain = function(abilityObject) {
	this.abilityObject = abilityObject;
	this.board = abilityObject.board;

	this.targetTiles = [];
	this.targetTilePoints = [];
	
	this.setTargets();
}

Trifle.TriggerTargetTilesTargetBrain.prototype.setTargets = function() {
	var self = this;

	this.abilityObject.triggerTargetTilePoints.forEach(function(boardPointWithTile) {
		var targetHelper = new Trifle.TargetHelper(self.abilityObject, boardPointWithTile, self);
		if (targetHelper.tileIsTargeted()) {
			self.targetTiles.push(boardPointWithTile.tile);
			self.targetTilePoints.push(boardPointWithTile);
			debug("Trigger Target Tiles Target Brain found target: ");
			debug(boardPointWithTile);
		}
	});

	this.abilityObject.triggerTargetTiles.forEach(function(possibleTargetTile) {
		var targetHelper = new Trifle.TargetHelper(self.abilityObject, null, self, possibleTargetTile);
		if (targetHelper.tileIsTargeted() && !self.targetTiles.includes(possibleTargetTile)) {
			self.targetTiles.push(possibleTargetTile);
			debug("Trigger Target Tiles Target Brain found target: ");
			debug(possibleTargetTile);
		}
	});
};

