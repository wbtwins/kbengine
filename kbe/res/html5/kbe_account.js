/*-----------------------------------------------------------------------------------------
												entity
-----------------------------------------------------------------------------------------*/
function KBEAccount()
{
	this.__init__ = function()
	{
		KBEGameObject.prototype.__init__.call(this);
		this.avatars = {};
		
		this.baseCall("reqAvatarList");
	}
}

KBEAccount.prototype = new KBEGameObject();

KBEAccount.prototype.onCreateAvatarResult = function(v)
{
}

KBEAccount.prototype.onReqAvatarList = function(v)
{
	alert(v);
}
	