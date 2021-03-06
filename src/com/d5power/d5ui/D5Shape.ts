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
 * Created by Administrator on 2015/8/28.
 */
module d5power {
    /**
     *
     * @author
     *
     */
    export class D5Shape extends D5Component
    {
        protected _workMode:number = 0;
        /**
         * 工作模式矩形
         */
        public static RECT:number = 0;
        /**
         * 工作模式圆
         */
        public static CIRCLE:number = 1;

        private _fillColor:number;

        private _tickNess:number = 0;

        private _color:number;

        private _offX:number = 0;

        private _offY:number = 0;

        private _drawWidth:number = 0;

        private _drawHeight:number = 0;

        private _radius:number = 0;


        private _shape:egret.Shape;
        public constructor()
        {
            super();
            this._shape = new egret.Shape();
            this.addChild(this._shape);
        }
        public draw():void
        {
            if(this._shape)this._shape.graphics.clear();
            switch(this._workMode)
            {
                case D5Shape.RECT:
                    this._shape.graphics.beginFill(this._fillColor);
                    if(this._tickNess>0)
                    {
                        this._shape.graphics.lineStyle(this._tickNess, this._color);
                    }
                    this._shape.graphics.drawRect(this._offX,this._offY,this._drawWidth,this._drawHeight);
                    this._shape.graphics.endFill();
                    break;
                case D5Shape.CIRCLE:
                    this._shape.graphics.beginFill(this._fillColor);
                    if(this._tickNess>0)
                    {
                        this._shape.graphics.lineStyle(this._tickNess, this._color);
                    }
                    this._shape.graphics.drawCircle(this._offX,this._offY,this._radius);
                    this._shape.graphics.endFill();
                    break;
            }
            super.draw();
        }

        /**
         *填充颜色
         */
        public get fillColor():number
        {
            return this._fillColor;
        }

        /**
         * @private
         */
        public setFillColor(value:number):void
        {
            if(this._fillColor == value)return;
            this._fillColor = value;
            this.invalidate();
        }

        /**
         * 线条粗细，0为不显示线条
         */
        public get tickNess():number
        {
            return this._tickNess;
        }

        /**
         * @private
         */
        public  setTickNess(value:number):void
        {
            if(this._tickNess == value)return;
            this._tickNess = value;
            this.invalidate();
        }

        /**
         * 线条颜色
         */
        public get color():number
        {
            return this._color;
        }

        /**
         * @private
         */
        public  setColor(value:number):void
        {
            if(this._color == value)return;
            this._color = value;
            this.invalidate();
        }

        /**
         * 偏移坐标x,y
         */
        public get offX():number
        {
            return this._offX;
        }

        /**
         * @private
         */
        public  setOffX(value:number):void
        {
            if(this._offX == value)return;
            this._offX = value;
            this.invalidate();
        }

        /**
         * 偏移坐标x,y
         */
        public get offY():number
        {
            return this._offY;
        }

        /**
         * @private
         */
        public setOffY(value:number):void
        {
            if(this._offY == value)return;
            this._offY = value;
            this.invalidate();
        }

        public get drawWidth():number
        {
            return this._drawWidth;
        }

        public setDrawWidth(value:number):void
        {
            if(this._drawWidth == value)return;
            this._drawWidth = value;
            this.invalidate();
        }

        public get drawHeight():number
        {
            return this._drawHeight;
        }

        public setDrawHeight(value:number):void
        {
            if(this._drawHeight == value)return;
            this._drawHeight = value;
            this.invalidate();
        }

        public get radius():number
        {
            return this._radius;
        }

        public setRadius(value:number):void
        {
            if(this._radius == value)return;
            this._radius = value;
            this.invalidate();
        }

        public get workMode():number
        {
            return this._workMode;
        }

        public setWorkMode(value:number):void
        {
            if(this._workMode == value)return;
            this._workMode = value;
            this.invalidate();
        }


    }
}
