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
/**
 * Created by Administrator on 2015/5/26.
 */
module d5power {
    export class BTTree
    {
        public constructor()
        {
        }
        public _root:BTNode = null;

        public isRunning:boolean = true;

        public static RESET:string = "Rest";

        private static _resetId:number;

        public start():void
        {
            this.Init();
            this._root.Activate();
        }
        public Update():void
        {
            if (!this.isRunning) return;

    //			if (database.GetData<bool>(RESET)) {
    //				Reset();
    //				database.SetData<bool>(RESET, false);
    //			}

            // Iterate the BT tree now!
            if (this._root.Evaluate()) {
                this._root.Tick();
            }
        }

        public OnDestroy():void
        {
            if (this._root != null) {
                this._root.Clear();
            }
        }

        // Need to be called at the initialization code in the children.
        protected Init():void
        {
    //			database = GetComponent<Database>();
    //			if (database == null) {
    //				database = gameObject.AddComponent<Database>();
    //			}

    //			_resetId = database.GetDataId(RESET);
    //			database.SetData<bool>(_resetId, false);
        }

        protected Reset():void
        {
            if (this._root != null) {
                this._root.Clear();
            }
        }
    }
}