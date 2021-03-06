//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, MicroGame Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
module d5power
{
    export class D5Bitmap extends D5Component
    {
        private bit:egret.Bitmap;

        private _url:string;

        public constructor()
        {
            super();
        }

        public setSkin(name:string):void
        {
            if(this._nowName == name) return;
            this._nowName = name;
            var data:D5UIResourceData = D5UIResourceData.getData(name);
            if(data==null)
            {
                trace("[D5Bitmap]No Resource"+name);
                var texture:egret.Texture = RES.getRes(name);
                if(texture)
                {
                    this.bit = new egret.Bitmap();
                    this.bit.texture = texture;
                    this.invalidate();
                }
                return;
            }
            if(this.bit == null) 
            {
                this.bit = new egret.Bitmap();
            }
            this.bit.texture = data.getResource(0);

            this.invalidate();
        }

        public setSrc(url:string):void
        {
            this._url = url;
            this.changeParticle();
        }

        private changeParticle():void
        {
            //RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
            //RES.loadConfig("resource/resource.json",  "resource/");
            //RES.loadGroup("preload");
            RES.getResByUrl(this._url, this.onComplete, this);
        }
        private onComplete(data:any):void
        {
            if(this.bit == null) this.bit = new egret.Bitmap();
            this.bit.texture = data;
            this.addChild(this.bit);
            if(data==null)
            {
                trace(this.name,'resource hot found ==============');
                return;
            }
            this.setSize(this.bit.texture.textureWidth,this.bit.texture.textureHeight);
            //this.invalidate();
        }

        public draw():void
        {
            if(this.bit==null)
            {

            }else{
                if(!this.contains(this.bit)) {
                    this.addChildAt(this.bit,0);

                }

            }

            super.draw();
        }

    }
}