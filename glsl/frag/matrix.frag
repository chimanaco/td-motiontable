mat2 scale(vec2 _scale){
    return mat2(_scale.x,0.0,
                0.0,_scale.y);
}

vec2 translate(vec2 _st, vec2 _offset)
 {
    vec2 uv = _st + vec2(_offset);
    return vec2(uv.s, uv.t);
 }

vec2 scaleUv(vec2 _st, vec2 _scale){
    _st -= vec2(0.5);
    _st = scale( _scale ) * _st;
    _st += vec2(0.5);
    return _st;
}